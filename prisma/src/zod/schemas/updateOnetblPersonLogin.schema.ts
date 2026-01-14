import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginSelectObjectSchema as tblPersonLoginSelectObjectSchema } from './objects/tblPersonLoginSelect.schema';
import { tblPersonLoginUpdateInputObjectSchema as tblPersonLoginUpdateInputObjectSchema } from './objects/tblPersonLoginUpdateInput.schema';
import { tblPersonLoginUncheckedUpdateInputObjectSchema as tblPersonLoginUncheckedUpdateInputObjectSchema } from './objects/tblPersonLoginUncheckedUpdateInput.schema';
import { tblPersonLoginWhereUniqueInputObjectSchema as tblPersonLoginWhereUniqueInputObjectSchema } from './objects/tblPersonLoginWhereUniqueInput.schema';

export const tblPersonLoginUpdateOneSchema: z.ZodType<Prisma.tblPersonLoginUpdateArgs> = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  data: z.union([tblPersonLoginUpdateInputObjectSchema, tblPersonLoginUncheckedUpdateInputObjectSchema]), where: tblPersonLoginWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginUpdateArgs>;

export const tblPersonLoginUpdateOneZodSchema = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  data: z.union([tblPersonLoginUpdateInputObjectSchema, tblPersonLoginUncheckedUpdateInputObjectSchema]), where: tblPersonLoginWhereUniqueInputObjectSchema }).strict();