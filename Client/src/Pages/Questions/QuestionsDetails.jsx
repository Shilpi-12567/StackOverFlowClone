import React from 'react'
import { useParams } from 'react-router-dom'
import upVote from '../../assets/sort-up.svg'
import downVote from '../../assets/sort-down.svg'
const QuestionsDetails = (question) => {
  const { id } = useParams()

  var questionsList = [{
    _id: 1,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    userPosted: "mino",
    userId: 1,
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  }, {
    _id: "2",
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "mano",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  }, {
    _id: 3,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "mano",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  }]
  // let questiondata=questionsList.filter(question => question._id === id)
  // console.log(questiondata)
  return (
    <div className='question-details-page'>
      {
        questionsList === null ? <h1>Loading..</h1> :
          <>
            {
              questionsList.map(question => 
                {
                 return(
                   <div key={question._id}> 

                   <section className='question-details-container'>
                    <h1>{question.questionTitle}</h1>
                    <div className='question-details-container-2'>
                      <div className='question-votes'>
                        <img src={upVote} alt="" width="18px" className='votes-icon' />
                        <p>{question.upVotes - question.downVotes}</p>
                        <img src={downVote} alt=""  width="18px" className='votes-icon'/>
                      </div>
                      <div style={{ width: "100%" }}>
                        <p className='question-body'>{question.questionBody}</p>
                        <div className="question-details-tags">
                          {
                            question.questionTags.map((tag) => (
                              <p key={tag}>{tag}</p>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </section> 
                </div>
                 )
                 
              })
            }
          </>
      }
    </div>
  )
}

export default QuestionsDetails