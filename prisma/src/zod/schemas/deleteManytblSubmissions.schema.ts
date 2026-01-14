import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './objects/tblSubmissionsWhereInput.schema';

export const tblSubmissionsDeleteManySchema: z.ZodType<Prisma.tblSubmissionsDeleteManyArgs> = z.object({ where: tblSubmissionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsDeleteManyArgs>;

export const tblSubmissionsDeleteManyZodSchema = z.object({ where: tblSubmissionsWhereInputObjectSchema.optional() }).strict();