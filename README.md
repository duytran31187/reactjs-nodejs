Nodejs with express: build api
 - create new module: backend with:
   - npm init
   - npm install express (optional as the following command will build it)
   - npx express-generator => to build skeleton
   - npm install
reactjs class base:
   - from root, run command to generate react under folder name frontend: npx create-react-app frontend
   - node Each class just can use only one context, we need.
       1. class.contextType = CartContext (The contextType property on a class can be assigned a Context object created by React.createContext())
       2. inside class: use this.context
       3. Hook can't be used inside a class
       4. if we need to use more than one Context=> ref https://legacy.reactjs.org/docs/context.html#contextconsumer

Context: To share data from one parent to many children by
  1. create a center store. ex: CartContext = createContext
  2. must tell REactjs where to get those data by Provder:
      - in parant component, must be wrapped with <cartContext.provider>
         