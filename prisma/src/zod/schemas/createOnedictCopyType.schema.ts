import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeSelectObjectSchema as dictCopyTypeSelectObjectSchema } from './objects/dictCopyTypeSelect.schema';
import { dictCopyTypeIncludeObjectSchema as dictCopyTypeIncludeObjectSchema } from './objects/dictCopyTypeInclude.schema';
import { dictCopyTypeCreateInputObjectSchema as dictCopyTypeCreateInputObjectSchema } from './objects/dictCopyTypeCreateInput.schema';
import { dictCopyTypeUncheckedCreateInputObjectSchema as dictCopyTypeUncheckedCreateInputObjectSchema } from './objects/dictCopyTypeUncheckedCreateInput.schema';

export const dictCopyTypeCreateOneSchema: z.ZodType<Prisma.dictCopyTypeCreateArgs> = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), data: z.union([dictCopyTypeCreateInputObjectSchema, dictCopyTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeCreateArgs>;

export const dictCopyTypeCreateOneZodSchema = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), data: z.union([dictCopyTypeCreateInputObjectSchema, dictCopyTypeUncheckedCreateInputObjectSchema]) }).strict();