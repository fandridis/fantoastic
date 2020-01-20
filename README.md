# Fantoastic

A fantastic library for all your toast needs.

### Live Preview: https://fantoastic.netlify.com/

<br />

## Getting started

### 1. Install the library (React >= 16.8.0 is required)
``` javascript
npm install fantoastic --save
```

<br />

### 2. Import the ToastProvider at the root of your React application (ex. App.jsx) and wrap your application
``` javascript
import { withToastProvider } from 'fantoastic';

const App = () => {
  ...
  ...
  ...
}

const AppWithToastProvider = withToastProvider(App);
export default AppWithToastProvider;
```

<br />

### 3. You can now use the toast hook anywhere in the app where a toast is needed.
``` javascript
import { useToast } from 'fantoastic';

const SomeComponent = () => {
  const toast = useToast();

  const handleCreateToast = () => {
    toast.add('The simplest of the toasts.');
  };

return (
  <>
    <button onClick={handleCreateToast}>Click me!</button>
  </>
)
```

## Extra configuration

The toast can be called with a variety of options: **toast.add(content, options)**

```javascript
  toast.add('I am a fantastic toast', {
    position: 'topRight',
    variant: 'default',
    duration: '5000',
    persist: false,
    withCloseIcon: false,
  })
```

The complete list of confirations:

| Option | Type | Default Value | Description |
| ----------- | ----------- |  ----------- | ----------- |
| position | String between: 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'top', 'bottom' |  'topRight' | Sets location on the screen where the toast will be rendered |
| variant | String between: 'default', 'primary', 'success', 'danger' |  'default' | Sets the variant (color) of the toast |
| duration | Number (in milliseconds) |  5000 | Sets the duration until the toast will be automatically closed |
| persist | Boolean |  false | Makes the toast to stay visible until it's manually closed |
| withCloseIcon | Boolean | false | Renders the toast with an close icon (X) on the top left corner |


<br />

## Development

Download the repo and in the root run ```npm run i-all``` to install all dependancies.

### Installing

After installing dependancies, run ```npm run dev``` to start the development environment. 

## Running the tests

Run the tests and listen for changes with ```npm run test``` or ```npm run test:once``` to run only once.

## Contributing

Contributions are more than welcome!

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## License
This project is licensed under the ISC License.
