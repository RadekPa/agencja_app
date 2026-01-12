import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorScalarWhereInputObjectSchema as BookAuthorScalarWhereInputObjectSchema } from './BookAuthorScalarWhereInput.schema';
import { BookAuthorUpdateManyMutationInputObjectSchema as BookAuthorUpdateManyMutationInputObjectSchema } from './BookAuthorUpdateManyMutationInput.schema';
import { BookAuthorUncheckedUpdateManyWithoutClientInputObjectSchema as BookAuthorUncheckedUpdateManyWithoutClientInputObjectSchema } from './BookAuthorUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BookAuthorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BookAuthorUpdateManyMutationInputObjectSchema), z.lazy(() => BookAuthorUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const BookAuthorUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.BookAuthorUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorUpdateManyWithWhereWithoutClientInput>;
export const BookAuthorUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
