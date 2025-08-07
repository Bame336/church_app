"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, Phone, Mail, Heart, Users, BookOpen, Music, Menu, X, ChevronRight } from 'lucide-react'

export default function ChurchApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { id: "home", label: "Home", icon: Users },
    { id: "about", label: "About", icon: Heart },
    { id: "services", label: "Services", icon: Clock },
    { id: "sermons", label: "Sermons", icon: BookOpen },
    { id: "events", label: "Events", icon: Calendar },
    { id: "prayer", label: "Prayer", icon: Heart },
    { id: "contact", label: "Contact", icon: Phone },
  ]

  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "9:00 AM",
      location: "Church Venue"
    },
    {
      title: "Sunday School",
      date: "Every Sunday",
      time: "8:00 AM",
      location: "Church Venue"
    },
    {
      title: "Bible Study",
      date: "Every Monday",
      time: "6:00 PM",
      location: "Church Venue"
    },
    {
      title: "Interdominational Vigil",
      date: "Every Thursday",
      time: "6:00 PM",
      location: "Church Venue"
    }
  ]

  const recentSermons = [
    {
      title: "Walking in Faith",
      speaker: "Evangelist Arowolo",
      date: "January 28, 2024",
      scripture: "Hebrews 11:1"
    },
    {
      title: "God's Abundant Grace",
      speaker: "Evangelist Arowolo",
      date: "January 21, 2024",
      scripture: "Ephesians 2:8-9"
    },
    {
      title: "The Power of Prayer",
      speaker: "Evangelist Arowolo",
      date: "January 14, 2024",
      scripture: "Matthew 6:9-13"
    }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg">
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold">Welcome to</h1>
                <h2 className="text-2xl md:text-3xl font-semibold">The Seed of Israel Evangelical Ministry</h2>
                <p className="text-lg opacity-90">Growing in Grace, Living in Truth</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 mt-4">
                  Join Us This Sunday
                </Button>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Service Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Sunday Worship</span>
                      <span className="font-medium">9:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bible Study</span>
                      <span className="font-medium">Mon 6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    4, Egunjobi Street off Olamummy Street, Aboru, Iyana-Ipaja.<br />
                    Lagos, Nigeria 100323<br />
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      Get Directions
                    </Button>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Sermons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Recent Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSermons.slice(0, 2).map((sermon, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{sermon.title}</h4>
                        <p className="text-sm text-muted-foreground">{sermon.speaker} • {sermon.date}</p>
                        <Badge variant="outline" className="mt-1">{sermon.scripture}</Badge>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Sermons
                </Button>
              </CardContent>
            </Card>
          </div>
        )

      case "about":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About Our Ministry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The Seed of Israel Evangelical Ministry is a spirit-filled church committed to raising a holy generation rooted in the Word of God. Through worship, teaching, and evangelism, we seek to lead souls to Christ and nurture spiritual growth in all believers.
                  {"In the Lord shall all the seed of Israel be justified, and shall glory."} — Isaiah 45:25 (KJV)
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To proclaim the gospel of Jesus Christ, nurture spiritual growth, and empower believers to walk in righteousness and purpose.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be a light to the nations, spreading the gospel, discipling believers, and bringing hope and healing to a broken world through Jesus Christ.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Core Values</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Biblical Foundation {"\"Your word is a lamp to my feet and a light to my path.\""} Psalm 119:105</li>
                      <li>Holiness and Righteous Living {"\"Be holy, for I am holy.\""} 1 Peter 1:16</li>
                      <li>Spiritual Growth {"\"But grow in the grace and knowledge of our Lord and Savior Jesus Christ.\""} 2 Peter 3:18</li>
                      <li>Evangelism and Discipleship {"\"Go and make disciples of all nations...\""} Matthew 28:19</li>
                      <li>Love and Compassion {"\"Let all that you do be done in love.\""} 1 Corinthians 16:14</li>
                      <li>Integrity and Accountability {"\"Whoever walks in integrity walks securely.\""} Proverbs 10:9</li>
                      <li>Unity in the Body of Christ {"\"That they may be one, even as we are one.\""} John 17:22</li>
                      <li>Servant Leadership {"\"Whoever wants to be first must be servant of all.\""} Mark 10:44</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Leadership Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      EG
                    </div>
                    <div>
                      <h4 className="font-medium">Evangelist Grace O. Arowolo</h4>
                      <p className="text-sm text-muted-foreground">General Overseer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      DB
                    </div>
                    <div>
                      <h4 className="font-medium">Mrs Bayode</h4>
                      <p className="text-sm text-muted-foreground">Deaconness</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "services":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-blue-600" />
                  Worship Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Sunday Worship Service</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Join us this Sunday for inspiring worship, sound biblical teaching, and heartfelt fellowship.{" "}
                      Our service includes passionate praise and worship, uplifting prayer, and a powerful message from God's Word — all in a welcoming, Spirit-filled atmosphere.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Bible Study</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Dig deeper into the Word with us!{" "}
                      Join us every Wednesday for a refreshing time of Bible study, open discussions, and spiritual growth.{" "}
                      Come ready to ask questions, grow in wisdom, and be equipped for daily living.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Interdominational Vigil</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      One Night. One Voice. One Encounter.{" "}
                      Join believers from every denomination as we gather weekly to seek the face of God in intense worship, prayer, and power-filled intercession.{" "}
                      Come expecting divine encounters, healing, and breakthrough!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "sermons":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Recent Messages
                </CardTitle>
                <CardDescription>
                  Listen to our latest sermons and be encouraged in your faith journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSermons.map((sermon, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <h3 className="font-semibold">{sermon.title}</h3>
                          <p className="text-sm text-muted-foreground">{sermon.speaker}</p>
                          <Badge variant="outline">{sermon.scripture}</Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">{sermon.date}</p>
                          <Button size="sm" className="mt-2">
                            Listen
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sermon Series</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium">Walking by Faith</h4>
                    <p className="text-sm text-muted-foreground">Exploring living a life of faith</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-medium">The Heart of Worship</h4>
                    <p className="text-sm text-muted-foreground">Understanding true worship and praise</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "events":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="p-4 bg-gradient-to-r from-green-50 to-blue-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Annual Thanksgiving Service</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Join us for our Annual Thanksgiving Service — a joyful celebration of God’s faithfulness, favor, and goodness!
                        </p>
                        <div className="flex gap-4 mt-2 text-sm">
                          <span>September 7, 2025</span>
                          <span>11:00 AM</span>
                        </div>
                      </div>
                      <Button size="sm">RSVP</Button>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Mercy of Upliftment</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          <strong>
                            🔥 Last 3-DAY Monthly POWER ENCOUNTER – Monthly Revival & Vigil
                          </strong>
                          <br />
                          Get ready for three days of divine visitation at{" "}
                          <strong>The Seed of Israel Evangelical Ministry</strong>!
                          <br />
                          <br />
                          <strong>📅 Wednesdays & Thursdays:</strong> Revival Services
                          <br />
                          Come hungry for the Word, healing, and restoration.
                          <br />
                          <br />
                          <strong>📅 Fridays:</strong> Night Vigil Encounter
                          <br />
                          A night of intense prayer, worship, and breakthrough!
                          <br />
                          <br />
                          <strong>📍 Venue:</strong> The Seed of Israel Evangelical Ministry
                          <br />
                          <br />
                          <em>Three Days. One Purpose. A Mighty Move of God.</em>
                          <br />
                          🕊️ Come expectant. Leave transformed.
                        </p>
                        <div className="flex gap-4 mt-2 text-sm">
                          <span>Wednesday - Thursday Monthly</span>
                          <span>6:00 pm</span>
                          <span>Friday</span>
                          <span>11:00 PM</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Learn More</Button>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Thanksgiving and Anointing Service</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Join us for our Thanksgiving and Anointing Service
                        </p>
                        <div className="flex gap-4 mt-2 text-sm">
                          <span>Every 1st Sunday of the Month</span>
                          <span>8:00 AM</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Join</Button>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "prayer":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-blue-600" />
                  Prayer Requests
                </CardTitle>
                <CardDescription>
                  Submit your prayer requests and let our church family pray with you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Your Name (Optional)</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Prayer Request</label>
                    <textarea 
                      className="w-full mt-1 p-2 border rounded-md h-32"
                      placeholder="Share your prayer request here..."
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="anonymous" />
                    <label htmlFor="anonymous" className="text-sm">Keep this request anonymous</label>
                  </div>
                  <Button className="w-full">Submit Prayer Request</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Family Prayer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Monthly Family Program</h4>
                    <p className="text-sm text-muted-foreground">
                      Join us every 2nd Saturday at 6:00 AM for corporate prayer and intercession for the Families
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Prayer Warriors</h4>
                    <p className="text-sm text-muted-foreground">
                      Be part of our prayer Warriors to receive urgent prayer requests via text, or email
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">Join Prayer Warriors</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        4, Egunjobi Street off Olamummy, Aboru, Iyana-Ipaja.<br />
                        Lagos, Nigeria 100323
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">(+234) 8057297144</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">tsiem@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea 
                      className="w-full mt-1 p-2 border rounded-md h-32"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tuesday, Wednesday and Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-blue-600">The Seed of Israel</h1>
              <p className="text-sm text-muted-foreground">Evangelical Ministry</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-[250px_1fr] gap-6">
          {/* Navigation Sidebar */}
          <div className={`space-y-2 ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <nav className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveTab(item.id)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Button>
                )
              })}
            </nav>
            
            <Separator className="my-4" />
            
            <Card className="p-4">
              <h3 className="font-medium mb-2">Give Online</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Support our ministry and mission
              </p>
              <Button className="w-full" size="sm">
                Donate Now
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <main className="min-h-[600px]">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}
