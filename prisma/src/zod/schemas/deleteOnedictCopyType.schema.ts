import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeSelectObjectSchema as dictCopyTypeSelectObjectSchema } from './objects/dictCopyTypeSelect.schema';
import { dictCopyTypeIncludeObjectSchema as dictCopyTypeIncludeObjectSchema } from './objects/dictCopyTypeInclude.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './objects/dictCopyTypeWhereUniqueInput.schema';

export const dictCopyTypeDeleteOneSchema: z.ZodType<Prisma.dictCopyTypeDeleteArgs> = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), where: dictCopyTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeDeleteArgs>;

export const dictCopyTypeDeleteOneZodSchema = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), where: dictCopyTypeWhereUniqueInputObjectSchema }).strict();