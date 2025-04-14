let courseData = {
    title: "Machine Learning Foundations",
    weeks: [
      {
        title: "Week 1",
        lectures: [
          { title: "What is Machine Learning?", videoUrl: "https://www.youtube.com/embed/zuS1WZQGhAs" },
          { title: "Supervised Learning: Regression", videoUrl: "https://www.youtube.com/embed/iVcrCdEaJ7A" },
        ],
        assignments: [],
      },
      {
        title: "Week 2",
        lectures: [
          { title: "Sets and Functions", videoUrl: "https://www.youtube.com/embed/Gi9nUcrZAJs" },
        ],
        assignments: [],
      },
    ],
  };
  
  export async function GET() {
    return new Response(JSON.stringify(courseData), { status: 200 });
  }
  
  export async function POST(req) {
    const newData = await req.json();
    courseData = newData;
    return new Response(JSON.stringify({ message: "Updated successfully!" }), { status: 200 });
  }
  