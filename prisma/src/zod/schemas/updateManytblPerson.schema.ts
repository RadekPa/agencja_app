import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonUpdateManyMutationInputObjectSchema as tblPersonUpdateManyMutationInputObjectSchema } from './objects/tblPersonUpdateManyMutationInput.schema';
import { tblPersonWhereInputObjectSchema as tblPersonWhereInputObjectSchema } from './objects/tblPersonWhereInput.schema';

export const tblPersonUpdateManySchema: z.ZodType<Prisma.tblPersonUpdateManyArgs> = z.object({ data: tblPersonUpdateManyMutationInputObjectSchema, where: tblPersonWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonUpdateManyArgs>;

export const tblPersonUpdateManyZodSchema = z.object({ data: tblPersonUpdateManyMutationInputObjectSchema, where: tblPersonWhereInputObjectSchema.optional() }).strict();