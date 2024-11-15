# script.py
import sys
import json

def main():
    data = json.loads(sys.stdin.read())
    name = data.get('name', 'Guest')
    print(json.dumps({"message": f"Hello, {name}!"}))

if __name__ == "__main__":
    main()