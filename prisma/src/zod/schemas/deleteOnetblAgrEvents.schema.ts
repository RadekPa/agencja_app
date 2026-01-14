import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsSelectObjectSchema as tblAgrEventsSelectObjectSchema } from './objects/tblAgrEventsSelect.schema';
import { tblAgrEventsIncludeObjectSchema as tblAgrEventsIncludeObjectSchema } from './objects/tblAgrEventsInclude.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './objects/tblAgrEventsWhereUniqueInput.schema';

export const tblAgrEventsDeleteOneSchema: z.ZodType<Prisma.tblAgrEventsDeleteArgs> = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), where: tblAgrEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsDeleteArgs>;

export const tblAgrEventsDeleteOneZodSchema = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), where: tblAgrEventsWhereUniqueInputObjectSchema }).strict();