import React, { useState } from 'react'
import { Formik } from 'formik'
import * as axios from 'axios'
import ResultAlbumCard from './ResultAlbumCard';

function Add() {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const submit = (values, actions) => {
        console.log(values.query);
        let data = values.query.replace(' ', '_');
        axios.get('https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=' + data)
        .then(response => response.data.album.filter(a => a.strReleaseFormat === 'Album'))
        .then(response => response.sort(function(a,b){return a.intYearReleased - b.intYearReleased}))
        .then(response => setResults(response))
        actions.setSubmitting(false)
    }


  return (
    <div className="add-page">
        <div className="container">
            <div className="add-content">
                <div className="input-wrapper">
                    <Formik
                    onSubmit={submit}
                    initialValues={{query: query}}
                    >
                        {
                        ({handleSubmit, handleChange, handleBlur, isSubmitting}) => (
                            <form onSubmit={handleSubmit}>
                                <input
                                placeholder='Search for an artist ...'
                                 name='query' type="text" onChange={handleChange} onBlur={handleBlur} />
                                <button className='btn' type='submit' disabled={isSubmitting}>Submit</button>
                            </form>
                        )
                        }
                    </Formik>
                </div>
                {
                    results && results.length > 0 && (
                        <ul className="results">
                            {results.map((artist, index) => {
                                return (
                                    <li key={index}>
                                        <ResultAlbumCard album={artist} />
                                    </li>
                                )
                            })}
                        </ul>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Add