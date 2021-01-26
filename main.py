from app import runapp

if __name__ == "__main__":
    runapp.debug = True
    runapp.run(host='0.0.0.0', port=5000)