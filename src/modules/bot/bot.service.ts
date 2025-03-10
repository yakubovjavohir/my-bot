import { Inject, Injectable } from '@nestjs/common';
import { Bot, InlineKeyboard, Keyboard } from "grammy";
import { MovieCreateService } from '../movie-create/movie-create.service';

const movie_check:string[] = []

@Injectable()
export class BotService {
  private bot : Bot

  constructor(@Inject("IMovieService") private readonly movieService:MovieCreateService){
    this.bot = new Bot("7586736426:AAGKiItI68Wl5OCYc9PVKOZV2Q9v1WErx8A")
    this.myBot()
  }

  myBot(){
    this.bot.start()
    this.bot.api.setMyCommands([
      {command:"start", description:"boshlash"},
      {command:"menu", description:"menyu"},
      {command:"movies", description:"kinolar"},
      {command:"my_movies", description:"mening tanlagan kinolarim"},
    ])
    this.bot.command("start", async (context) => {
      await context.reply("Assalomu Aleykum " + context.from?.first_name)
      await context.reply("Qandey yordam bera olaman😊")
    })

    this.bot.command("menu", async (context) => {
      const button = new Keyboard()
      .text("📜 Buyurtmalar")
      .text("ℹ️ Ma'lumot").row()
      .text("❌ Yopish")

      context.reply("qaysi menyuni tanlaysiz", {reply_markup:button.resized()})
    })

    this.bot.command("movies", async (context) => {
      const movies = new InlineKeyboard()
      const movieName = await this.movieService.findAll()
      
      for (let i = 0; i < movieName.length; i += 3) {
        const first = movieName[i]?.dataValues;
        const second = movieName[i + 1]?.dataValues;
        const third = movieName[i + 2]?.dataValues;
        
        movies.text(first.name, `movie_${first.name}`)

        if(second){
          movies.text(second.name, `movie_${second.name}`)
        }

        if(third){
          movies.text(third.name, `movie_${third.name}`)
        }

        movies.row()
      }

      await context.reply("qaysi kinolar tanlaysiz", {
        reply_markup:movies
      })
    })

    this.bot.callbackQuery(/^movie_/ , async (context)=>{
      const movie_name = String(context.callbackQuery.data.split("_")[1])     

      console.log(movie_name);
      

      const mavjud = movie_check.find((mv) => {
        return mv === movie_name
      })

      if(mavjud){
        await context.reply(`siz bu filmni tanlab bolgansiz (${movie_name}) ❌`)
        return
      }

       
      movie_check.push(movie_name)
      await context.answerCallbackQuery("qoshildi✅")
      await context.reply(`${movie_name}`)
    })

    this.bot.command("my_movies", async (context)=>{
      let my_movie = `my movies list:\n`
      for (let i = 0; i < movie_check.length; i++) {
        const movie = movie_check[i];
        my_movie = my_movie + (i+1) + ') ' + movie + '\n'
      }

      const keyboard = new Keyboard().text("buy")

      await context.reply(my_movie, {
        reply_markup:keyboard.resized()
      })
    })


    this.bot.on("message", async (context)=>{
      const text = context.message.text
    })
  }
}
