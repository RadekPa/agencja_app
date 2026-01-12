import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './BookAuthorWhereUniqueInput.schema';
import { BookAuthorCreateWithoutClientInputObjectSchema as BookAuthorCreateWithoutClientInputObjectSchema } from './BookAuthorCreateWithoutClientInput.schema';
import { BookAuthorUncheckedCreateWithoutClientInputObjectSchema as BookAuthorUncheckedCreateWithoutClientInputObjectSchema } from './BookAuthorUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BookAuthorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BookAuthorCreateWithoutClientInputObjectSchema), z.lazy(() => BookAuthorUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const BookAuthorCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.BookAuthorCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorCreateOrConnectWithoutClientInput>;
export const BookAuthorCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
