export const metadata = {
  title: 'Contact - Hobi Knows',
  description: 'Contact us at Hobi Knows',
}

export default function ContactPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Contact
        </h1>
      </div>
      <div className="prose max-w-none pt-8 pb-8 dark:prose-invert">
        <p>
          If you have any questions, feedback, or business inquiries, feel free to reach out to us!
        </p>
        <ul>
          <li><strong>Email:</strong> (선택사항: 본인 이메일 주소)</li>
          <li><strong>Website:</strong> https://www.hobiknows.com/</li>
        </ul>
      </div>
    </div>
  )
}
