import React from 'react';
import Header from './Header';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import img from './Community Engagement.jpg';
const SubjectDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SubjectHeading = styled.h1`
  font-size: 1rem;
  margin-bottom:20px;
  margin-right:450px;
`;
const Description = styled.h3`
font-size: 1rem;

margin-right:750px;

`;
const Material = styled.h3`
font-size: 1rem;
margin-bottom:10px;
margin-right:710px;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px; // Space between buttons
  margin-right:420px;
  margin-bottom:20px;
`;

const UploadButton = styled(Link)`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007BFF;
  color: white;
  border: none;
  width:200px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
const Para = styled.p`
font-size:14px;
margin-left:0px;
`;
const VideoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 margin-left:100px;
`;

const VideoBox = styled.div`
  
  width:300px;
  height:150px;
  border-radius:10px;
  border:2px solid black;
  margin: 10px;
`;

const Video = styled.img`
  width: 250px; /* Adjust as per your video thumbnail size */
  height: auto;
`;
const VideoTitle = styled.div`
font-size:12px;
margin-left:15px;
`;
const VideoCon = styled.div`
cursor:pointer;
// display:flex;
// flex-direction:coloum;
`

const SubjectDashboard = () => {
  const { name } = useParams();

  const handleUploadLiveLecture = () => {

    alert('Upload Live Lecture clicked');
  };


  const uploadedVideos = [
    { id: 1, image: '../Teacher/assets/image/Corporate Training and Professional Development.jpg', title: 'Video Title 1' },
    { id: 2, image: '../Teacher/assets/image/Diversity and Inclusion Initiatives.jpg', title: 'Video Title 2' },
    { id: 3, image: '../Teacher/assets/image/FAQs and Support Documentation.jpg', title: 'Video Title 3' },
    { id: 4, image: '../Teacher/assets/image/Live Classes and Webinars.jpg', title: 'Video Title 4' },
    { id: 5, image: '../Teacher/assets/image/Educational Resources.jpg', title: 'Video Title 5' },
    { id: 6, image: './Community Engagement.jpg', title: 'Video Title 6' },

  ];
  return (
    <>
    <Header />
      <SubjectDashboardContainer>
        <SubjectHeading>dashboard/classname/year/division/subjectid/{name} </SubjectHeading>
        <ButtonContainer>
          <UploadButton onClick={handleUploadLiveLecture}>Create Live Lecture</UploadButton>
          <UploadButton to='/video-form'>Upload Video Lecture</UploadButton>
        </ButtonContainer>
        <VideoContainer>
          {uploadedVideos.map((video) => (
            <>
              <VideoCon>
              <VideoBox key={video.id}>
                <Video src={video.image} alt={video.title} />

              </VideoBox>
              <VideoTitle>{video.title}</VideoTitle>
              </VideoCon>
            </>
          ))}
          {/* <img  src={img} alt="Logo" /> */}
        </VideoContainer>
        <Description>Description:</Description>
        <Para>In Maths, integration is a method of adding or summing up the parts tofind the whole.
          It is a reverse process of differentiation,   where we <br></br>reduce the functions into parts.
          This method is used to find the summation under a vast scale.In Mathematics, when we cannot
          perform<br></br> general addition operations, we use integration to add values on a large scale.
        </Para>

        <Material>Teaching Material:</Material>
        {/* Add more content related to the specific subject here */}
      </SubjectDashboardContainer>
    </>
  );
};

export default SubjectDashboard;
