import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Yikes, misplaced topic!</h2>
      <p>This page does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}