import InnerHeader from "@/components/InnerHeader";
import Link from "next/link";
import React from "react";

// ✅ Define Props Type
type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
};

// ✅ Use Type in Component
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold mb-2 text-red-700">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

// ✅ Page Component
export default function Page() {
  const coreSolutions = [
    {
      title: "Our Core Solutions",
      description: "Employee Information Management (EIM) in Human Resource Management (HRM) involves the systematic organization, storage, and utilization of data related to employees within an organization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Recruitment Management",
      description: "Recruitment management in HRM (Human Resource Management) involves the strategic and systematic process of finding, attracting, and hiring the most suitable candidates for job vacancies within an organization. It's a crucial function within HR that aims to identify and acquire the right talent to meet the company's current and future needs.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "PROJECT MANAGEMENT",
      description: "Project management in the context of Human Resource Management (HRM) involves applying project management principles and methodologies specifically within the realm of HR initiatives and endeavors. It encompasses planning, organizing, coordinating, and overseeing HR-related projects to achieve specific goals or objectives within anorganization.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "PERFORMANCE MANAGEMENT",
      description: "Performance management in Human Resource Management (HRM) refers to the process of ensuring that employees' work and contributions align with an organization's goals. It involves various strategies, systems, and processes to maximize employees' effectiveness in achieving objectives.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "ATTENDANCE AND TIME TRACKING",
      description: "Attendance and time tracking in Human Resource Management (HRM) involves the systematic recording and management of employees' work hours, absences, breaks, and leaves. It's a crucial aspect of HRM",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "BENEFITS ADMINISTRATION",
      description: "Benefits administration in Human Resource Management (HRM) refers to the process of managing employee benefits programs within an organization These benefits can include health insurance, retirement plans, paid time off, disability insurance,.",
      image: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "DOCUMENT MANAGEMENT",
      description: "Document management for HRM (Human Resource Management) involves the organization, storage, retrieval, and security of various HRrelated documents within a company. It encompasses the handling of personnel records, job descriptions, resumes, contracts, policies, employee handbooks, performance evaluations, and more.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "COMPLIANCE AND REPORTING",
      description: "Compliance: This involves ensuring that the organization operates within the legal boundaries and follows regulations set by governing bodies. Reporting: Reporting in HRM involves the documentation and communication of various aspects related to the workforce.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "CUSTOMIZATION AND SCALABILITY",
      description: "Customization and scalability in Human Resource Management (HRM) refer to the ability of HR systems or software to be tailored to specific organizational needs while also being able to accommodate growth or changes in the size and requirements of the business.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "EMPLOYEE INCENTIVE",
      description: "Employee incentives in human resource management (HRM) are rewards or motivators offered to employees to encourage desired behavior,improve performance, boost morale, and increase productivity within an organization.",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "EMPLOYEE PERFORMANCE ANALYTICS",
      description: "Employee Performance Analytics in Human Resource Management (HRM) involves the use of data and metrics to assess and improve employees' performance within an organization. It leverages various quantitative and qualitative measures to evaluate how effectively employees arecontributing to the company's goals and objectives.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "PAYROLL PROCESSING",
      description: "Payroll processing in Human Resource Management (HRM) refers to the administration of employee financial records. It involves calculating employees' wages, withholding taxes and other deductions, and ensuring timely payment. Calculating Gross Pay, Net Pay Calculation, Payment Distribution",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "RECRUITMENT AND APPLICANT TRACKING",
      description: "Recruitment and Applicant Tracking are essential aspects of Human Resource Management (HRM) that involve the processes of finding, attracting, assessing, and hiring the right candidates for job vacancies within an organization. Job Analysis Sourcing Interviewing Screening",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "EMPLOYEE SELF SERVICE",
      description: "Employee self-service (ESS) in HRM (Human Resource Management) refers to a system or platform that allows employees to manage various aspects of their employment on their own, without direct intervention from HR personnel..",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "TRAINING AND DEVELOPMENT",
      description: "Training: This involves activities focused on enhancing specific skills or imparting new knowledge to employees. It can include workshops, seminars, on-the-job training, or online courses. Development: Development goes beyond immediate job requirements and aims at preparing employees for future responsibilities and career advancement within the organization.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "NOTIFICATIONS AND ALERTS",
      description: "In the context of Human Resource Management (HRM), notifications and alerts refer to the automated messages or reminders sent to employees or HR personnel regarding various HR-related activities, events, deadlines, or important information. Policy Updates Performance Reviews Policy Updates Reminders for Tasks and Deadlines",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    },
    {
      "title": "Finance Management",
      "description": "Finance management in an organization involves planning, controlling, and monitoring financial resources to achieve business goals. It includes budgeting, expense tracking, payroll management, financial reporting, and ensuring compliance with regulations. Effective finance management helps organizations maintain profitability, manage risks, and make informed strategic decisions.",
      "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    },
    {
      "title": "Asset Management",
      "description": "Asset management refers to the systematic process of tracking, maintaining, and optimizing an organization's physical and digital assets. This includes equipment, devices, software, and infrastructure. It ensures proper utilization, reduces losses, schedules maintenance, and improves lifecycle management, helping organizations maximize value and operational efficiency.",
      "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <>
      <InnerHeader
        title="HR & Payroll Management Software"
        subtitle="Comprehensive Solutions for Modern Organizations"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-full object-cover brightness-50"
              alt="Office"
            />
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl font-extrabold mb-4 tracking-tight">SMARTBIZ</h1>
            <p className="text-2xl font-light mb-6">Human Resource Management Software</p>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Systematic organization, storage, and utilization of employee data to meet your company's future needs.
            </p>
            <Link
              href="https://smartbizhrms.co.tz/login"
              className="inline-block mt-8 py-3 px-8 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all shadow-lg"
              target="_blank"
            >
              Login to SMARTBIZ HRMS
            </Link>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Solutions</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreSolutions.map((solution, index) => (
              <FeatureCard
                key={index}
                title={solution.title}
                description={solution.description}
                image={solution.image}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}