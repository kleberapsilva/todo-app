import React from 'react'

export default props => {
    const renderRows = () => {
        return (
            <tr><td>ok</td></tr>
            )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descri��o</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
        )
}