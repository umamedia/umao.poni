import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, Twitter, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 via-white to-red-50 relative overflow-hidden">
      {/* Racing Goal Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Vertical stripes pattern like goal post */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200 to-transparent bg-repeat-x"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 40px, #fecaca 40px, #fecaca 80px)",
            backgroundSize: "80px 100%",
          }}
        ></div>

        {/* Checkered flag pattern at top */}
        <div
          className="absolute top-0 left-0 w-full h-20 opacity-30"
          style={{
            backgroundImage: `
                 repeating-linear-gradient(45deg, #000 0px, #000 20px, #fff 20px, #fff 40px),
                 repeating-linear-gradient(-45deg, #000 0px, #000 20px, transparent 20px, transparent 40px)
               `,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Goal line effect */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-red-500 via-white to-red-500 opacity-60"></div>
      </div>

      {/* Animated Running Horses Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horse silhouettes running */}
        <div className="absolute top-20 animate-horse-run-1 opacity-40">
          <div className="w-12 h-8 bg-gray-800 rounded-full relative">
            <div className="absolute -top-2 left-2 w-3 h-4 bg-gray-800 rounded-full"></div>
            <div className="absolute -bottom-1 left-1 w-2 h-3 bg-gray-800"></div>
            <div className="absolute -bottom-1 right-1 w-2 h-3 bg-gray-800"></div>
          </div>
        </div>

        <div className="absolute top-40 animate-horse-run-2 opacity-35">
          <div className="w-10 h-6 bg-gray-700 rounded-full relative">
            <div className="absolute -top-1 left-2 w-2 h-3 bg-gray-700 rounded-full"></div>
            <div className="absolute -bottom-1 left-1 w-1 h-2 bg-gray-700"></div>
            <div className="absolute -bottom-1 right-1 w-1 h-2 bg-gray-700"></div>
          </div>
        </div>

        <div className="absolute top-60 animate-horse-run-3 opacity-45">
          <div className="w-14 h-10 bg-gray-900 rounded-full relative">
            <div className="absolute -top-2 left-3 w-4 h-5 bg-gray-900 rounded-full"></div>
            <div className="absolute -bottom-1 left-2 w-2 h-4 bg-gray-900"></div>
            <div className="absolute -bottom-1 right-2 w-2 h-4 bg-gray-900"></div>
          </div>
        </div>

        <div className="absolute top-32 animate-horse-run-4 opacity-30">
          <div className="w-8 h-5 bg-gray-600 rounded-full relative">
            <div className="absolute -top-1 left-2 w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="absolute -bottom-1 left-1 w-1 h-2 bg-gray-600"></div>
            <div className="absolute -bottom-1 right-1 w-1 h-2 bg-gray-600"></div>
          </div>
        </div>

        <div className="absolute top-80 animate-horse-run-5 opacity-40">
          <div className="w-12 h-8 bg-gray-800 rounded-full relative">
            <div className="absolute -top-2 left-2 w-3 h-4 bg-gray-800 rounded-full"></div>
            <div className="absolute -bottom-1 left-1 w-2 h-3 bg-gray-800"></div>
            <div className="absolute -bottom-1 right-1 w-2 h-3 bg-gray-800"></div>
          </div>
        </div>

        <div className="absolute top-10 animate-horse-run-6 opacity-25">
          <div className="w-9 h-6 bg-gray-700 rounded-full relative">
            <div className="absolute -top-1 left-2 w-2 h-3 bg-gray-700 rounded-full"></div>
            <div className="absolute -bottom-1 left-1 w-1 h-2 bg-gray-700"></div>
            <div className="absolute -bottom-1 right-1 w-1 h-2 bg-gray-700"></div>
          </div>
        </div>

        <div className="absolute top-96 animate-horse-run-7 opacity-35">
          <div className="w-11 h-7 bg-gray-800 rounded-full relative">
            <div className="absolute -top-2 left-2 w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute -bottom-1 left-1 w-2 h-3 bg-gray-800"></div>
            <div className="absolute -bottom-1 right-1 w-2 h-3 bg-gray-800"></div>
          </div>
        </div>

        <div className="absolute top-52 animate-horse-run-8 opacity-30">
          <div className="w-13 h-9 bg-gray-900 rounded-full relative">
            <div className="absolute -top-2 left-3 w-3 h-4 bg-gray-900 rounded-full"></div>
            <div className="absolute -bottom-1 left-2 w-2 h-3 bg-gray-900"></div>
            <div className="absolute -bottom-1 right-2 w-2 h-3 bg-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Floating goal elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-red-400 rounded-full opacity-60 animate-bounce"></div>
        <div
          className="absolute top-1/3 right-20 w-4 h-4 bg-white border-2 border-red-400 rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-red-300 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-white border-2 border-red-300 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Header - Simple Navigation */}
      <header className="w-full border-b border-red-200/30 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-200 to-white flex items-center justify-center border-2 border-red-300">
              <span className="text-lg">🏁</span>
            </div>
            <span className="text-xl font-bold text-gray-800">ウマレビュー</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors px-4 py-2 rounded-lg hover:bg-green-50"
            >
              <FileText className="w-4 h-4" />
              <span>note</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-red-500 transition-colors px-4 py-2 rounded-lg hover:bg-red-50"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              <Twitter className="w-4 h-4" />
              <span>X</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors px-4 py-2 rounded-lg hover:bg-purple-50 border border-gray-300 hover:border-purple-300"
            >
              <span>📧</span>
              <span>お問い合わせ</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Simple Layout with Catch Copy and Illustration */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-200 to-transparent"></div>
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-red-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-red-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-18 h-18 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          {/* Main Catch Copy - Large and Central */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 text-gray-800 leading-tight tracking-wide">
            信頼できる予想を、
            <br />
            <span className="text-red-600">みんなで見つけよう</span>
          </h1>

          {/* Character Illustration - Large Single Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Combined illustration area */}
              <div className="flex justify-center items-end space-x-8 md:space-x-16">
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-6 border-white shadow-2xl bg-white">
                    <Image
                      src="/cute-umao-horse.png"
                      alt="ウマオ"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-lg px-6 py-3 rounded-full font-bold shadow-lg">
                    ウマオ
                  </div>
                </div>
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-6 border-white shadow-2xl bg-white">
                    <Image
                      src="/cute-pony-character.png"
                      alt="ぽに〜"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-lg px-6 py-3 rounded-full font-bold shadow-lg">
                    ぽに〜
                  </div>
                </div>
              </div>

              {/* Floating decorative elements around characters - goal themed */}
              <div className="absolute -top-8 -left-8 w-8 h-8 bg-red-400 rounded-full opacity-70 animate-bounce"></div>
              <div
                className="absolute -top-4 -right-12 w-6 h-6 bg-white border-2 border-red-400 rounded-full opacity-70 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-12 -left-4 w-7 h-7 bg-red-300 rounded-full opacity-70 animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -bottom-8 -right-8 w-5 h-5 bg-white border-2 border-red-300 rounded-full opacity-70 animate-bounce"
                style={{ animationDelay: "1.5s" }}
              ></div>

              {/* Goal celebration effect behind characters */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-200/30 via-white/30 to-red-200/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Simple introduction */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">ウマオ＆ぽに〜について</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            私たちは競馬予想サイトやYouTuberの精度を毎日検証し、
            <br className="hidden md:block" />
            皆さんが信頼できる情報に出会えるようお手伝いしています。
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="border-red-100 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐴</span>
                </div>
                <CardTitle className="text-red-600 text-xl">ウマオ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  データ分析が得意な競馬好きのキャラクター。的中率や回収率などの数値を詳しく調べて、わかりやすく解説します。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-pink-100 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦄</span>
                </div>
                <CardTitle className="text-pink-500 text-xl">ぽに〜</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  みんなの声を集めるのが大好きなキャラクター。実際の利用者の体験談や口コミを丁寧にまとめてお届けします。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">私たちのサービス</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              YouTube・note・Xで日々情報発信し、競馬予想の世界をより良くするために活動しています
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Youtube className="w-10 h-10 text-red-500" />
                </div>
                <CardTitle className="text-red-500 text-xl">YouTube配信</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  週3回の動画配信で検証結果を詳しく解説。グラフや表を使ってわかりやすくお伝えします。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-green-600" />
                </div>
                <CardTitle className="text-green-600 text-xl">note記事</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  毎日の検証結果を記事で公開。データの詳細分析や考察を文章でじっくりお読みいただけます。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Twitter className="w-10 h-10 text-blue-400" />
                </div>
                <CardTitle className="text-blue-400 text-xl">X (Twitter)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  リアルタイムで検証状況をツイート。速報や気づいたポイントを随時お伝えしています。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-400 to-white flex items-center justify-center border-2 border-red-400">
              <span className="text-xl">🏁</span>
            </div>
            <span className="text-2xl font-bold">ウマレビュー</span>
          </div>
          <p className="text-gray-300 mb-8 leading-relaxed">
            ウマオとぽに〜が、信頼できる競馬予想をみんなで見つけるお手伝いをします
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="#" className="text-gray-300 hover:text-red-400 transition-colors">
              <Youtube className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">
              <FileText className="w-6 h-6" />
            </Link>
          </div>
          <div className="border-t border-gray-700 pt-8 text-gray-400">
            <p>&copy; 2024 ウマレビュー. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
