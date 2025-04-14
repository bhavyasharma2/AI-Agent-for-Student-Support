let courseData = {
    title: "Software Engineering",
    weeks: [
      {
        title: "Week 1",
        lectures: [
          { title: "Introduction to Course", videoUrl: "https://www.youtube.com/embed/hKm_rh1RTJQ" },
          { title: "Agile Methodologies", videoUrl: "https://www.youtube.com/embed/nQzRUGuEDXs" },
        ],
        assignments: [],
      },
      {
        title: "Week 2",
        lectures: [
          { title: "User Stories", videoUrl: "https://www.youtube.com/embed/_KH9dSFVYTs" },
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