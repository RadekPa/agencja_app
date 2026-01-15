import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';

export const ContactDeleteManySchema: z.ZodType<Prisma.ContactDeleteManyArgs> = z.object({ where: ContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactDeleteManyArgs>;

export const ContactDeleteManyZodSchema = z.object({ where: ContactWhereInputObjectSchema.optional() }).strict();