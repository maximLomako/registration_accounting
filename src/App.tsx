import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/Sidebar/Sidebar";
import {Main} from "./components/Main/Main";

const App = () => {
  type CriteriaSearchType = {
    [key: string]: string
  }
  const [criteriaSearch, setCriteriaSearch] = useState<CriteriaSearchType>({
    lastName: '',
    name: '',
    patronymic: '',
    idNum: '',
    passportSeries: '',
    passportNumber: '',
  });

  const onChangeField = (criterion: string, value: string) => {
    setCriteriaSearch({...criteriaSearch, [criterion]: value})
  }

  return (
    <div className="App">
      <Header/>
      <SideBar
        lastName={criteriaSearch.lastName}
        name={criteriaSearch.name}
        patronymic={criteriaSearch.patronymic}
        idNum={criteriaSearch.idNum}
        passportSeries={criteriaSearch.birthDate}
        passportNumber={criteriaSearch.regAddress}
        onChangeField={onChangeField}
      />
      <Main/>
    </div>
  );
}

export default App;
