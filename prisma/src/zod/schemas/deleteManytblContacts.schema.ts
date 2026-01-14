import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblContactsWhereInputObjectSchema as tblContactsWhereInputObjectSchema } from './objects/tblContactsWhereInput.schema';

export const tblContactsDeleteManySchema: z.ZodType<Prisma.tblContactsDeleteManyArgs> = z.object({ where: tblContactsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblContactsDeleteManyArgs>;

export const tblContactsDeleteManyZodSchema = z.object({ where: tblContactsWhereInputObjectSchema.optional() }).strict();