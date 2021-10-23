import React from 'react'
import Layout from "./HOC/Layout/Layout";
import { Switch, Route } from 'react-router-dom'
import Quiz from "./containers/quiz/Quiz";
import QuizList from "./containers/QuizList/QuizList";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import Auth from "./containers/Auth/Auth";



function App() {
  return (
    <Layout>
        <Switch>
            <Route exact path='/' component={QuizList} />
            <Route exact path='/quiz-creator' component={QuizCreator} />
            <Route exact path='/quiz/:id' component={Quiz} />
            <Route exact path='/auth' component={Auth} />
        </Switch>
    </Layout>
  );
}

export default App;
