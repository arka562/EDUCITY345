import React from "react";
import { useParams } from "react-router-dom";
import "./CourseDetail.css";
import { assets } from "../../assets/asset.js";

const courseDetails = {
  upsc: {
    title: "UPSC Exam Preparation",
    brief:
      "A comprehensive course covering Indian Polity, Economy, and History.",
    description: `
      Preparing for the UPSC Civil Services Examination requires a well-structured approach, 
      in-depth subject knowledge, and regular practice. This course is meticulously designed 
      to cover every aspect of the UPSC syllabus, ensuring clarity of concepts and the ability 
      to write analytical answers effectively.
    `,
    keyPoints: [
      "Covers Prelims, Mains, and Interview preparation.",
      "Detailed notes on Indian Polity, Economy, History, and General Studies.",
      "Includes current affairs discussions and answer writing practice.",
      "Regular mock tests and quizzes with performance analysis.",
      "Expert mentorship and guidance from top educators.",
    ],
    quizzes:
      "Includes weekly quizzes, subject-wise tests, and a full-length mock exam.",
    image: assets.upsc,
    // background: "/assets/upsc-bg.jpg",
  },
  jee: {
    title: "JEE Exam Preparation",
    brief:
      "Crack JEE with in-depth lessons on Physics, Chemistry, and Mathematics.",
    description: `
      The JEE exam is one of India's most competitive entrance tests for engineering aspirants. 
      To succeed, you need a strong foundation in core subjects, conceptual clarity, and ample practice. 
      This course provides everything you need to achieve a high score.
    `,
    keyPoints: [
      "Covers JEE Mains & Advanced syllabus with conceptual clarity.",
      "Video lectures, solved examples, and step-by-step problem-solving.",
      "Extensive question banks, mock tests, and time management strategies.",
      "Previous years’ question discussions and shortcut techniques.",
      "Doubt resolution sessions and mentor support for better understanding.",
    ],
    quizzes:
      "Includes topic-wise quizzes, practice tests, and a final JEE mock exam.",
    image: assets.jee,
    background: "/assets/jee-bg.jpg",
  },
  neet: {
    title: "NEET Exam Preparation",
    brief:
      "Study Biology, Chemistry, and Physics with expert-curated materials.",
    description: `
      NEET is a highly competitive medical entrance exam that requires deep subject knowledge 
      and excellent problem-solving skills. Our course is designed to help you master 
      key concepts and apply them effectively in the exam.
    `,
    keyPoints: [
      "Comprehensive coverage of Class 11 & 12 Biology, Chemistry, and Physics.",
      "Concept-based learning with real-life medical case studies.",
      "Interactive video lectures and doubt-solving sessions.",
      "Regular full-length mock tests with detailed performance feedback.",
      "Tricks and mnemonics to remember important biological concepts.",
    ],
    quizzes:
      "Includes chapter-wise quizzes, full-length tests, and a final NEET mock exam.",
    image: assets.neet,
    background: "/assets/neet-bg.jpg",
  },
  cat: {
    title: "CAT Exam Preparation",
    brief:
      "Boost your aptitude with Quantitative, Verbal, and Logical Reasoning.",
    description: `
      The CAT exam is a gateway to India's top business schools, and cracking it 
      requires smart strategies, time management, and strong analytical skills. 
      Our course is tailored to help you develop a competitive edge.
    `,
    keyPoints: [
      "Covers all three sections: Quantitative Aptitude, Verbal Ability, and Logical Reasoning.",
      "Practice with 1000+ high-level questions and mock tests.",
      "Speed-building techniques and time-efficient strategies.",
      "Daily reading comprehension and vocabulary-building exercises.",
      "Personalized performance tracking and AI-driven adaptive tests.",
    ],
    quizzes:
      "Includes speed-based quizzes, logical puzzles, and full-length CAT mock exams.",
    // image: assets.cat,
    // background: assets.cat,
  },
  gre: {
    title: "GRE Exam Preparation",
    brief: "Master Analytical Writing, Verbal, and Quantitative Reasoning.",
    description: `
      The GRE is an essential exam for those planning to pursue higher studies abroad. 
      This course provides an in-depth approach to mastering the GRE syllabus, 
      covering both Verbal and Quantitative sections, along with Analytical Writing.
    `,
    keyPoints: [
      "Covers both General and Subject GRE formats.",
      "Practice Analytical Writing with AI-assisted feedback.",
      "Extensive vocabulary-building techniques for high Verbal scores.",
      "Multiple full-length GRE simulations for real exam experience.",
      "Personalized study plans and targeted weak-area improvement.",
    ],
    quizzes:
      "Includes GRE-style analytical writing tests, verbal reasoning quizzes, and full-length GRE simulations.",
    image: assets.gre,
    background: "/assets/gre-bg.jpg",
  },
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseDetails[courseId];

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div
      className="course-detail"
      style={{
        backgroundImage: `url(${course.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="course-content">
        <h1>{course.title}</h1>
        <img src={course.image} alt={course.title} className="course-image" />
        <p className="course-brief">{course.brief}</p>
        <p className="course-description">{course.description}</p>

        <h2>Key Highlights:</h2>
        <ul className="course-keypoints">
          {course.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <p className="course-quizzes">
          <strong>Quizzes & Exams:</strong> {course.quizzes}
        </p>
        <button className="enroll-button">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseDetail;
