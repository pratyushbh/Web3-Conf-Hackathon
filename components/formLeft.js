import React from 'react'

export default function FormLeft() {
  return (
    <div>
        <form>
            <h3>Campaign Name:</h3>
            <input type="text"/>
            <h3>Required Amount(in eth):</h3>
            <input type="number"/>
            <h3>Image URL:</h3>
            <input type="file"/>
            <h3>Slug(url-tag):</h3>
            <input type="text"/>

        </form>
    </div>
  )
}
