import 'App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AppRouting from 'Pages/AppRouting';
import AuthContextProvider from 'Context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <AppRouting />
    </AuthContextProvider>
  );
}

export default App;
