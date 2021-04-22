"""Main file."""
from app.app import app


def main():
    """Main to start server or test."""
    app.run(debug=True)


if __name__ == '__main__':
    main()
