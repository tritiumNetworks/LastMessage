import React, { useRef, useState } from 'react'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import './App.css'
import { random } from './utils'

function Box (props: any) {
  const mesh = useRef<MeshProps>()

  const [isHover, setIsHover] = useState(false)

  useFrame(() => {
    if (!mesh.current) return

    mesh.current.rotation.x += random(-1, 1) / 7
    mesh.current.rotation.y += random(-1, 1) / 7
    mesh.current.rotation.z += random(-1, 1) / 7

    mesh.current.position.x += random(-1, 1) / 50
    mesh.current.position.y += random(-1, 1) / 50

    if (window.scrollY) {
      mesh.current.position.y -= 0.02
      mesh.current.scale.x += 0.001
      mesh.current.scale.y += 0.001
      mesh.current.scale.z += 0.001
    }
  })

  function pointerMove (event: MouseEvent) {
    if (!isHover) return
    if (!mesh.current) return
    if (typeof window === 'undefined') return

    mesh.current.position.x = event.clientX / 1000
    mesh.current.position.y = event.clientY / 1000
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={() => alert('Thank u :)')}
      onPointerMove={pointerMove}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
      scale={0.1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHover ? 'red' : '#6bedd4'} />
    </mesh>
  )
}

function App () {
  return (
    <div>
      <div className="three-canvas">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
        </Canvas>
      </div>
      <div className="introduce">
        <p>
          Tritium Networks<br />
          (2016~2021)<br />
          <small>스크롤을 내려 마지막 문자 보기</small>
        </p>
      </div>
      <div className="says">
        <big>안녕하세요.</big><br />
        2016년부터 트리튬 네트워크를 운영한 개발자 박민혁입니다. <br />
        트리튬 네트워크는 2016년 &quot;PMH Studio&quot;라는 이름으로 시작한 프로그래밍 그룹입니다. <br />
        <br />
        초창기 PMH Studio는 프로그래밍이 목적이 아녔습니다. <br />
        Vocaloid를 이용한 노래 제작을 시작으로 유튜브 편집 등 미디어와 관련된 작업을 진행하던 그룹이었습니다. <br />
        하지만 소문이 퍼지기를 기다리는 것 만으로는 전혀 홍보가 되지 않았고, 오랜 고민 끝에 그룹 홍보용 웹사이트를 제작하였습니다. <br />
        <br />
        저는 웹사이트를 제작하며 큰 즐거움을 느꼈고, 그룹원들도 그렇게 느껴 웹 사이트 제작을 주 프로젝트로 진행했습니다. <br />
        그렇게 그룹은 프로그래밍 그룹으로 변화하였고 저에게도 많은 변화를 주었습니다. <br />
        웹 프로그래밍을 시작하게 되는 저의 큰 변화점이 되었습니다.<br />
        <br />
        많은 발전 이후 그룹을 찾는 사람들도 많아지기 시작하였습니다. <br />
        Discord 플랫폼을 통해 많은 사람들을 만나고 소통하였습니다. <br />
        저는 사람들과 소통하는 것이 즐거운 일이라고 생각하였고, 그룹은 소통을 편리하게 해 줄 여러 가지 챗봇들을 개발하였습니다. <br />
        2018년 처음 선보였던 &quot;뮤봇&quot;을 시작으로 많은 유저분들이 그룹의 봇을 이용해 주시기 시작하셨습니다. <br />
        <br />
        비록 이렇게 &quot;컴퓨팅 자원 및 시간적 자원 부족&quot; 문제로 그룹의 모든 서비스를 중단하지만, 유저분들 한 분 한 분 기억하도록 하겠습니다. <br />
        감사합니다. <b>- Dev. PMH</b><br />
        <br />
        <br />
        <i>LofiGirl과 자동자가진단 등의 프로젝트들은 <a style={{ color: 'white' }} href="https://pmh.codes">이곳</a>에서 계속 진행됩니다.</i>
      </div>
    </div>
  )
}

export default App
