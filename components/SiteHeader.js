import React from 'react'
import Link from 'next/link'

export default () => (
  <>
    <div className="mb-16 flex justify-between w-full items-center">
      <h1 className="leading-tight font-normal text-sm sm:text-xl">
        <Link href="/"><a className="text-black hover:text-grey-darker">Alexander Hansson<span className="hidden sm:inline-block">, designer och utvecklare</span></a></Link>
      </h1>
      <div>
        <p className="leading-tight">
          <Link href="/cv"><a className="text-sm sm:text-xl text-black hover:text-grey-darker">Resumé</a></Link> <Link href="/projekt"><a className="text-sm sm:text-xl pl-2 sm:pl-6 text-black hover:text-grey-darker">Utvalda projekt</a></Link>
        </p>
      </div>
    </div>
  </>
)
