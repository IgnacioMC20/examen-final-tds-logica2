import React from 'react'

export const Table = ({ semestre, mesesArray }) => {

    const header = semestre[0];
    const data = semestre.slice(1);

    let nombres = data.map(item => item[0]);
    nombres = [...new Set(nombres)];

    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        {
                            header.map(item => {
                                return <th key={item}>{item}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => {
                            return <tr key={i}>
                                {
                                    item.map(item => {
                                        return <td key={item}>{item}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>Proyecto</th>
                        {
                            mesesArray.map(item => {
                                return <th key={item}>{item}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        nombres.map((proyecto, i) => {
                            return (
                                <tr key={i}>
                                    <td>{proyecto}</td>
                                    {
                                        mesesArray.map( (mes, index) => {
                                            let valor = data.filter( pro => pro[0] === proyecto && pro[1] === mes );
                                            if(valor.length > 0) {
                                                return <td key={index}>{valor[0][2]}</td>
                                            }else return <td key={index}>0</td>
                                        })

                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
