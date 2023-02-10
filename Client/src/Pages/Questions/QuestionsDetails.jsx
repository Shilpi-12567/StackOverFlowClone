import React from 'react'
import { Link, useParams } from 'react-router-dom'
import upVote from '../../assets/sort-up.svg'
import downVote from '../../assets/sort-down.svg'
import Avatar from '../../Components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import './Questions.css'
const QuestionsDetails = (question) => {
  const { id } = useParams()

  var questionsList = [{
    _id: 1,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "nodejs", "reactjs", "mongodb", "expressjs"],
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
              questionsList.map(question => {
                return (
                  <div key={question._id}>

                    <section className='question-details-container'>
                      <h1>{question.questionTitle}</h1>
                      <div className='question-details-container-2'>
                        <div className='question-votes'>
                          <img src={upVote} alt="" width="18px" className='votes-icon' />
                          <p>{question.upVotes - question.downVotes}</p>
                          <img src={downVote} alt="" width="18px" className='votes-icon' />
                        </div>
                        <div style={{ width: "100%" }}>
                          <p className='question-body'>{question.questionBody}</p>
                          <div className="question-details-tags">
                            {
                              question.questionTags.map((tag) => (
                                <p key={tag}>{tag}</p>
                              ))
                            }
                            <div className="question-actions-user">
                              <div>
                                <button type='button'>Share</button>
                                <button type='button' >Delete</button>
                              </div>
                              <div>
                                <p>asked{question.askedOn}</p>
                                <Link to={`/Users/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                  <Avatar backgroundColor="orange" px='8px' py='5px' borderRadius="4px" width="20px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                  <div>
                                    {question.userPosted}
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {
                      question.noOfAnswers !== 0 && (
                        <section>
                          <h3>{question.noOfAnswers} Answers</h3>
                          <DisplayAnswer key={question._id} question={question} />
                        </section>
                      )
                    }
                    <section className='post-ans-container'>
                      <h3>Your Answer</h3>
                      <form>
                        <textarea name="" id="" cols="30" rows="10"></textarea><br />
                        <input type="Submit" className='post-ans-btn' value='Post Your Answer' />
                      </form>
                      <p>
                        Browse other Question tagged
                        {
                          question.questionTags.map((tag) => (
                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                          ))
                        } or
                        <Link to='/AskQuestion' style={{ textDecoration: "none", color: "#009dff" }}> ask your own question.</Link>
                      </p>
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