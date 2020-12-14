import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import BookEntity from './book.entity';
import GenreEntity from './genre.entity';
@Entity()
export default class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

// 1:n relation with bookEntity 
@OneToMany( () => BookEntity , book => book.user)
books: BookEntity[];

}
