import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginUpdateManyMutationInputObjectSchema as tblPersonLoginUpdateManyMutationInputObjectSchema } from './objects/tblPersonLoginUpdateManyMutationInput.schema';
import { tblPersonLoginWhereInputObjectSchema as tblPersonLoginWhereInputObjectSchema } from './objects/tblPersonLoginWhereInput.schema';

export const tblPersonLoginUpdateManySchema: z.ZodType<Prisma.tblPersonLoginUpdateManyArgs> = z.object({ data: tblPersonLoginUpdateManyMutationInputObjectSchema, where: tblPersonLoginWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginUpdateManyArgs>;

export const tblPersonLoginUpdateManyZodSchema = z.object({ data: tblPersonLoginUpdateManyMutationInputObjectSchema, where: tblPersonLoginWhereInputObjectSchema.optional() }).strict();