import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblClients_obsoleteSelectObjectSchema as tblClients_obsoleteSelectObjectSchema } from './objects/tblClients_obsoleteSelect.schema';
import { tblClients_obsoleteIncludeObjectSchema as tblClients_obsoleteIncludeObjectSchema } from './objects/tblClients_obsoleteInclude.schema';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './objects/tblClients_obsoleteWhereUniqueInput.schema';

export const tblClients_obsoleteFindUniqueSchema: z.ZodType<Prisma.tblClients_obsoleteFindUniqueArgs> = z.object({ select: tblClients_obsoleteSelectObjectSchema.optional(), include: tblClients_obsoleteIncludeObjectSchema.optional(), where: tblClients_obsoleteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblClients_obsoleteFindUniqueArgs>;

export const tblClients_obsoleteFindUniqueZodSchema = z.object({ select: tblClients_obsoleteSelectObjectSchema.optional(), include: tblClients_obsoleteIncludeObjectSchema.optional(), where: tblClients_obsoleteWhereUniqueInputObjectSchema }).strict();