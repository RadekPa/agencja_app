import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './BookAuthorWhereUniqueInput.schema';
import { BookAuthorUpdateWithoutClientInputObjectSchema as BookAuthorUpdateWithoutClientInputObjectSchema } from './BookAuthorUpdateWithoutClientInput.schema';
import { BookAuthorUncheckedUpdateWithoutClientInputObjectSchema as BookAuthorUncheckedUpdateWithoutClientInputObjectSchema } from './BookAuthorUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BookAuthorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BookAuthorUpdateWithoutClientInputObjectSchema), z.lazy(() => BookAuthorUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const BookAuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.BookAuthorUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorUpdateWithWhereUniqueWithoutClientInput>;
export const BookAuthorUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
