import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { BsFillTriangleFill, BsSquareFill } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

function ShowResultComp() {
  return (
    <div
      style={{
        width: 700,
        height: 300,
        backgroundColor: 'white',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <div
        style={{
          width: 165,
          height: 250,
          position: 'absolute',
          bottom: 7,
          right: 530
        }}
      >
        <div
          style={{
            height: '20%',
            width: '100%',
            color: '#e21b3c',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 36,
            fontWeight: 'bold'
          }}
        >
          {' '}
          10
        </div>
        <div
          style={{
            height: '60%',
            width: '100%',
            backgroundColor: '#e21b3c',
            marginTop: 5,
            marginBottom: 5
          }}
        ></div>
        <div
          style={{
            height: '19%',
            width: '100%',
            backgroundColor: '#e21b3c',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 25
          }}
        >
          <BsFillTriangleFill />
        </div>
      </div>
      <div
        style={{
          width: 165,
          height: 250,
          position: 'absolute',
          bottom: -120,
          right: 355
        }}
      >
        <div
          style={{
            height: '20%',
            width: '100%',
            color: '#1368ce',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 36,
            fontWeight: 'bold'
          }}
        >
          {' '}
          0
        </div>
        <div
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#1368ce',
            marginTop: 5,
            marginBottom: 5
          }}
        ></div>
        <div
          style={{
            height: '19%',
            width: '100%',
            backgroundColor: '#1368ce',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20
          }}
        >
          <FaStar />
        </div>
      </div>
      <div
        style={{
          width: 165,
          height: 250,
          position: 'absolute',
          bottom: -120,

          left: 355
        }}
      >
        <div
          style={{
            height: '20%',
            width: '100%',
            color: '#d89e00',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 36,
            fontWeight: 'bold'
          }}
        >
          {' '}
          0
        </div>
        <div
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#d89e00',
            marginTop: 5,
            marginBottom: 5
          }}
        ></div>
        <div
          style={{
            height: '19%',
            width: '100%',
            backgroundColor: '#d89e00',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20
          }}
        >
          <FaCircle />
        </div>
      </div>
      <div
        style={{
          width: 165,
          height: 250,
          position: 'absolute',
          bottom: -120,

          left: 530
        }}
      >
        <div
          style={{
            height: '20%',
            width: '100%',
            color: '#26890c',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 36,
            fontWeight: 'bold'
          }}
        >
          {' '}
          0
        </div>
        <div
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#26890c',
            marginTop: 5,
            marginBottom: 5
          }}
        ></div>
        <div
          style={{
            height: '19%',
            width: '100%',
            backgroundColor: '#26890c',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 18
          }}
        >
          <BsSquareFill />
        </div>
      </div>
    </div>
  )
}

export default ShowResultComp
