const FAQItem = ({ question, answer }) => {
  return (
    <details className="group bg-white border border-slate-200 rounded-lg p-5 cursor-pointer hover:border-blue-300 transition-colors">
      <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
        {question}
        <span className="text-blue-500 group-open:rotate-180 transition-transform duration-300">
          ▼
        </span>
      </summary>
      <div className="mt-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
        {answer}
      </div>
    </details>
  );
};

export default FAQItem;