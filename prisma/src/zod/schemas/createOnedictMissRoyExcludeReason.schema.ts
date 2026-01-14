import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonSelectObjectSchema as dictMissRoyExcludeReasonSelectObjectSchema } from './objects/dictMissRoyExcludeReasonSelect.schema';
import { dictMissRoyExcludeReasonCreateInputObjectSchema as dictMissRoyExcludeReasonCreateInputObjectSchema } from './objects/dictMissRoyExcludeReasonCreateInput.schema';
import { dictMissRoyExcludeReasonUncheckedCreateInputObjectSchema as dictMissRoyExcludeReasonUncheckedCreateInputObjectSchema } from './objects/dictMissRoyExcludeReasonUncheckedCreateInput.schema';

export const dictMissRoyExcludeReasonCreateOneSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonCreateArgs> = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  data: z.union([dictMissRoyExcludeReasonCreateInputObjectSchema, dictMissRoyExcludeReasonUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonCreateArgs>;

export const dictMissRoyExcludeReasonCreateOneZodSchema = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  data: z.union([dictMissRoyExcludeReasonCreateInputObjectSchema, dictMissRoyExcludeReasonUncheckedCreateInputObjectSchema]) }).strict();