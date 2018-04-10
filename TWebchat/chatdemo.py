# coding: utf-8
__author__ = 'lau.wenbo'

import tornado.ioloop
import tornado.options
import tornado.websocket
import tornado.web
import tornado.escape
import uuid
import logging
import os.path
from tornado.options import define, options

define("port", default=8888, help="run on the given port", type=int)


class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r"/", MainHandler),
            (r"/chatsocket", ChatSocketHandler)
        ]
        settings = dict(
            cookie_secret="You_CANT_GUESS_MY_SECRET",
            template_path=os.path.join(os.path.dirname(__file__), "templates"),
            static_path=os.path.join(os.path.dirname(__file__), "static"),
            xsrf_cookies=True,
        )

        super(Application, self).__init__(handlers, **settings)


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")


class ChatSocketHandler(tornado.websocket.WebSocketHandler):
    waiters = set()

    def open(self):
        ChatSocketHandler.waiters.add(self)

    @classmethod
    def send_update(cls, chat):
        logging.info("sending message to %d waiters", len(cls.waiters))
        for waiter in cls.waiters:
            try:
                waiter.write_message(chat)
            except Exception as e:
                logging.error("Error sending message", exc_info=True)

    def on_close(self):
        ChatSocketHandler.waiters.remove(self)

    def on_message(self, message):
        logging.info("got message %r", message)
        print(message)
        parsed = tornado.escape.json_decode(message)
        self.username = parsed["username"]
        chat = {
            "id": str(uuid.uuid4()),
            "body": parsed["body"],
            "type": "message",
        }
        chat["html"] = tornado.escape.to_basestring(self.render_string("message.html", message=chat))
        ChatSocketHandler.send_update(chat)


def main():
    tornado.options.parse_command_line()
    app = Application()
    app.listen(options.port)
    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    main()
