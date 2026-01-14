import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonSelectObjectSchema as tblPersonSelectObjectSchema } from './objects/tblPersonSelect.schema';
import { tblPersonUpdateInputObjectSchema as tblPersonUpdateInputObjectSchema } from './objects/tblPersonUpdateInput.schema';
import { tblPersonUncheckedUpdateInputObjectSchema as tblPersonUncheckedUpdateInputObjectSchema } from './objects/tblPersonUncheckedUpdateInput.schema';
import { tblPersonWhereUniqueInputObjectSchema as tblPersonWhereUniqueInputObjectSchema } from './objects/tblPersonWhereUniqueInput.schema';

export const tblPersonUpdateOneSchema: z.ZodType<Prisma.tblPersonUpdateArgs> = z.object({ select: tblPersonSelectObjectSchema.optional(),  data: z.union([tblPersonUpdateInputObjectSchema, tblPersonUncheckedUpdateInputObjectSchema]), where: tblPersonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonUpdateArgs>;

export const tblPersonUpdateOneZodSchema = z.object({ select: tblPersonSelectObjectSchema.optional(),  data: z.union([tblPersonUpdateInputObjectSchema, tblPersonUncheckedUpdateInputObjectSchema]), where: tblPersonWhereUniqueInputObjectSchema }).strict();