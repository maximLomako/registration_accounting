import * as React from 'react';
import {DataGrid, ColDef} from '@material-ui/data-grid';

const columns: ColDef[] = [
  {field: 'lastName', headerName: 'Фамилия', width: 130},
  {field: 'name', headerName: 'Имя', width: 130},
  {field: 'patronymic', headerName: 'Отчество', width: 130},
  {field: 'birthDate', headerName: 'Дата Рождения', width: 130},
  {field: 'idNum', headerName: 'Идентификационный номер', width: 130},
  {field: 'regAddress', headerName: 'Адрес регистрации(после конвертации)', width: 130},
  {field: 'regAddress2', headerName: 'Адрес регистрации(коды АИЕ и ТЕ)', width: 130},
  {field: 'regDate', headerName: 'Дата регистрации', width: 130},
];

const rows = [
  {
    id: '2',
    lastName: 'Ivamov',
    name: 'Petya',
    patronymic: 'Sergeevich',
    birthDate: '123',
    idNum: '123',
    regAddress: 'string',
    regAddress2: 'string2',
    regDate: 'string'
  }
];

export const Main = () => {
  return (
    <div style={{height: 400, width: '80%', marginLeft: 'auto'}}>
      <DataGrid rows={rows} columns={columns} pageSize={5}/>
    </div>
  );
}
