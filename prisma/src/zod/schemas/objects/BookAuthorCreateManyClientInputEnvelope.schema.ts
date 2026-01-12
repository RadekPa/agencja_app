import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorCreateManyClientInputObjectSchema as BookAuthorCreateManyClientInputObjectSchema } from './BookAuthorCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BookAuthorCreateManyClientInputObjectSchema), z.lazy(() => BookAuthorCreateManyClientInputObjectSchema).array()])
}).strict();
export const BookAuthorCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.BookAuthorCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorCreateManyClientInputEnvelope>;
export const BookAuthorCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
