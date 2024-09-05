from bottle import Bottle, static_file, request, template, run
from langchain_ollama import OllamaLLM

app = Bottle(False)


@app.route("/")
def home():
    return template("Home/index.html")


@app.route("/gemini-data-channel")
def gemDataChan():
    prompt = request.query['prompt']
    model = OllamaLLM(model="llama3")
    return {"content": model.invoke(prompt)}


@app.route('/search')
def search():
    q = ""
    isgem = False
    try:
        q = request.query["q"]
    except KeyError:
        return "Error page"

    try:
        isgem = bool(request.query['gemini'])
    except KeyError:
        pass
    return template('Search/index.html', q=q, gemini=isgem)


@app.route("/shorts")
def shorts():
    return template('Shorts/index.html')


@app.route("/Home/css/<script>")
def css(script):
    return static_file(script, root="Home/css")


@app.route("/Home/js/<script>")
def js(script):
    return static_file(script, root="Home/js")


@app.route("/Home/Images/<image>")
def homeImage(image):
    return static_file(image, root="Home/Images")


@app.route("/Search/<script>")
def home(script):
    return static_file(script, root="Search")


@app.route("/Search/Images/<image>")
def homeImage(image):
    return static_file(image, root="Search/Images")


run(app, host='localhost', port=8080, debug=True)