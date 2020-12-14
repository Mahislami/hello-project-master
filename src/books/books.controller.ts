import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import BookEntity from 'db/book.entity';
import { application } from 'express';
import { type } from 'os';
import { BaseEntity } from 'typeorm';
import CreateBookDto from 'user/dto/create-book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    constructor (private readonly bookService: BooksService){}
    @Post()
    @Header('content-type','application/jason')
    @ApiResponse( {
        status: 201,
        description: 'Book Created.',
        type: BaseEntity,
    })
    create(@Body() createBookDto:CreateBookDto){
        return this.bookService.insert(createBookDto)
    

    }

    @Get()
    @ApiResponse({status: 200,type:[BookEntity] })
    findAll(){
        return this.bookService.getAllBooks()
    }















}
