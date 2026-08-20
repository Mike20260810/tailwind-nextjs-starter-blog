export const metadata = {
  title: 'Contact - Hobi Knows',
  description: 'Contact us at Hobi Knows',
}

export default function ContactPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Contact
        </h1>
      </div>
      <div className="dark:prose-invert max-w-none pt-8 pb-8">
        <p>
          If you have any questions, feedback, or business inquiries, feel free
          to reach out to us!
        </p>
        <ul>
          <li>
            <strong>Email:</strong> (hjlee2020@gmail.com)
          </li>
          <li>
            <strong>Website:</strong> https://www.hobiknows.com/
          </li>
        </ul>
      </div>
    </div>
  )
}
