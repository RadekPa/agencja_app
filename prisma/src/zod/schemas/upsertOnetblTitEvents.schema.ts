import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsSelectObjectSchema as tblTitEventsSelectObjectSchema } from './objects/tblTitEventsSelect.schema';
import { tblTitEventsIncludeObjectSchema as tblTitEventsIncludeObjectSchema } from './objects/tblTitEventsInclude.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './objects/tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsCreateInputObjectSchema as tblTitEventsCreateInputObjectSchema } from './objects/tblTitEventsCreateInput.schema';
import { tblTitEventsUncheckedCreateInputObjectSchema as tblTitEventsUncheckedCreateInputObjectSchema } from './objects/tblTitEventsUncheckedCreateInput.schema';
import { tblTitEventsUpdateInputObjectSchema as tblTitEventsUpdateInputObjectSchema } from './objects/tblTitEventsUpdateInput.schema';
import { tblTitEventsUncheckedUpdateInputObjectSchema as tblTitEventsUncheckedUpdateInputObjectSchema } from './objects/tblTitEventsUncheckedUpdateInput.schema';

export const tblTitEventsUpsertOneSchema: z.ZodType<Prisma.tblTitEventsUpsertArgs> = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), where: tblTitEventsWhereUniqueInputObjectSchema, create: z.union([ tblTitEventsCreateInputObjectSchema, tblTitEventsUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitEventsUpdateInputObjectSchema, tblTitEventsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblTitEventsUpsertArgs>;

export const tblTitEventsUpsertOneZodSchema = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), where: tblTitEventsWhereUniqueInputObjectSchema, create: z.union([ tblTitEventsCreateInputObjectSchema, tblTitEventsUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitEventsUpdateInputObjectSchema, tblTitEventsUncheckedUpdateInputObjectSchema ]) }).strict();