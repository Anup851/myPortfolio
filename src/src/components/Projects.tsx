export default function Projects() {
  const projects = [
    {
      title: "AI Chatbot – Genie",
      description:
        "Built an intelligent chatbot with NLP, real-time API integration (weather, time, etc.), and responsive UI. Reduced support inquiries by 20%.",
      tech: "JavaScript, Node.js, APIs",
      link: "https://github.com/anup-singh/genie-chatbot",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio with blog section, SEO optimization, and modern UI using React + Tailwind. Increased recruiter visibility.",
      tech: "React.js, Tailwind CSS",
      link: "https://yourportfolio.com",
    },
  ];

  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            <p className="mt-2 text-sm text-gray-500">Tech: {project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-primary underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
